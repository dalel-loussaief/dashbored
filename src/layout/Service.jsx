import React, { useState } from "react";
import { MdEdit, MdDelete, MdAdd } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import FormAgent from "./FormAgent";

const Service = () => {
    const [agents, setAgents] = useState([
        { id: 1, name: "achat" },
        { id: 2, name: "vendre" },
        { id: 3, name: "louer"},
     
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const agentsPerPage = 4; // Nombre d'agents par page

    // Fonction pour filtrer les agents en fonction du terme de recherche
    const filteredAgents = agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculer l'index de début et de fin de la liste des agents à afficher pour la pagination
    const indexOfLastAgent = currentPage * agentsPerPage;
    const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
    const currentAgents = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);

    // Fonction pour changer de page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const styles = {
        userContainer: {
            textAlign: "center",
        },
        h2: {
            marginBottom: "10px",
            display: "inline-block",
        },
        searchContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
        },
        searchInput: {
            padding: "6px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "150px",
            marginRight: "10px",
        },
        addButton: {
            fontSize: "24px",
            color: "green",
            cursor: "pointer",
        },
        searchButton: {
            padding: "6px",
            borderRadius: "4px",
        },
        table: {
            margin: "0 auto",
            borderCollapse: "collapse",
            width: "80%",
        },
        th: {
            backgroundColor: "#f2f2f2",
            padding: "8px",
            fontWeight: "bold",
            border: "1px solid #ddd",
        },
        td: {
            padding: "8px",
            border: "1px solid #ddd",
        },
        editButton: {
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px",
            cursor: "pointer",
            marginRight: "4px",
        },
        deleteButton: {
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "8px",
            cursor: "pointer",
        },
        editIcon: {
            verticalAlign: "middle",
        },
        deleteIcon: {
            verticalAlign: "middle",
        },
        pagination: {
            marginTop: "20px",
            textAlign: "center",
        },
        pageLink: {
            margin: "0 5px",
            cursor: "pointer",
        },
    };

    // Rendu de la pagination
    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredAgents.length / agentsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div style={styles.pagination}>
                {pageNumbers.map(number => (
                    <span key={number} style={styles.pageLink} onClick={() => paginate(number)}>
                        {number}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div style={styles.userContainer}>
            <h2 style={styles.h2}>Liste les Services</h2>
            <div style={styles.searchContainer}>
                <Link to="/ServiceAdd" style={styles.addButton}> {/* Lien vers la page FormAgent */}
                    <MdAdd />
                </Link>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={styles.searchInput}
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit" style={styles.searchButton}>
                        Search
                    </button>
                </form>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Nom</th>
                        <th style={styles.th}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentAgents.map(agent => (
                        <tr key={agent.id}>
                            <td style={styles.td}>{agent.name}</td>
                            <td style={styles.td}>
                                <button style={styles.editButton}>
                                    {/* Utilisation de Link pour rediriger vers la page FormAgent */}
                                    <Link to={`/FormService/${agent.id}`} state={{ agentData: agent }}>
                                        <MdEdit style={styles.editIcon} />
                                    </Link>
                                </button>
                                <button style={styles.deleteButton}>
                                    <MdDelete style={styles.deleteIcon} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
};

export default Service;
