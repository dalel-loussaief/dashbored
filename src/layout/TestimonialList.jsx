import React, { useState } from "react";
import { MdDelete, MdVisibility } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "John Doe", message: "Great experience with the service." },
    { id: 2, name: "Jane Smith", message: "Highly recommend this company." },
    // Add more testimonials as needed
  ]);

  const [deleteModal, setDeleteModal] = useState(null);
  const [viewModal, setViewModal] = useState(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 4;

  const openDeleteModal = (testId) => {
    setSelectedTestimonial(testId);
    deleteModal.show();
  };

  const closeDeleteModal = () => {
    setSelectedTestimonial(null);
    deleteModal.hide();
  };

  const openViewModal = (testId) => {
    const selectedTestimonial = testimonials.find(testimonial => testimonial.id === testId);
    setSelectedTestimonial(selectedTestimonial);
    viewModal.show();
  };

  const closeViewModal = () => {
    setSelectedTestimonial(null);
    viewModal.hide();
  };

  React.useEffect(() => {
    setDeleteModal(new Modal(document.getElementById('deleteModal'), { backdrop: 'static', keyboard: false }));
    setViewModal(new Modal(document.getElementById('viewModal'), { backdrop: 'static', keyboard: false }));
  }, []);

  const renderTestimonials = () => {
    const filteredTestimonials = testimonials.filter(testimonial =>
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    return currentTestimonials.map(testimonial => (
      <tr key={testimonial.id}>
        <td>{testimonial.name}</td>
        <td>{testimonial.message}</td>
        <td>
          <button className="btn btn-primary" onClick={() => openViewModal(testimonial.id)}>
            <MdVisibility />
          </button>
          <button className="btn btn-danger" onClick={() => openDeleteModal(testimonial.id)}>
            <MdDelete />
          </button>
        </td>
      </tr>
    ));
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Testimonial List</h2>
      <div className="d-flex justify-content-end mb-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTestimonials()}</tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(testimonials.length / testimonialsPerPage))].map((_, i) => (
            <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Delete Testimonial</h5>
              <button type="button" className="btn-close" onClick={closeDeleteModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this testimonial?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeDeleteModal}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={closeDeleteModal}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">Testimonial Message</h5>
              <button type="button" className="btn-close" onClick={closeViewModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedTestimonial && (
                <p>{selectedTestimonial.message}</p>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeViewModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
