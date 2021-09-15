import PropTypes from "prop-types";

const Table = ({ data }) => {
    return (
        <table className="table mt-3">
            <thead className="table-dark">
                <tr>
                    <th>Data</th>
                    <th>Demanda</th>
                    <th>Capacidade</th>
                    <th>Atendimento planejado</th>
                    <th>Atendimento realizado</th>
                    <th>Desvio</th>
                </tr>
            </thead>
            <tbody>
                {   
                    data.map((item, key) => 
                        <tr key={key} className="text-center">
                            <td>{item.date}</td>
                            <td>{item.demand}</td>
                            <td>{item.capacity}</td>
                            <td>{item.planned}</td>
                            <td>{item.accomplished}</td>
                            <td>{item.detour}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Table;