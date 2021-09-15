import React, { useEffect, useState } from "react";
import Graph from "../../components/Graph";
import Navbar from "../../components/Navbar";

import logo from "../../assets/images/logo.png";
import VerticalNav from "../../components/VerticalNav";
import { data } from "../../mocks/tableAndGraph"; 
import Table from "../../components/Table";

const Home = () => {
    const [dataGraph] = useState([[
        'Período de atendimento',
        'Capacidade',
        'Atendimento realizado'
    ]]);

    const [dataTable, setDataTable] = useState(data);

    const calcDetour = (accomplisheds) => {
        let media = 0;
        let calc = 0;
        const dataCalc = [];

        media = accomplisheds.reduce((media, item) => media + item);
        media = media/accomplisheds.length;

        accomplisheds.forEach(item => dataCalc.push(Math.pow((item - media), 2)));

        calc = dataCalc.reduce((calc, item) => calc + item);
        if (accomplisheds.length > 1) {
            calc = Math.sqrt(calc/(accomplisheds.length - 1));
        }

        return calc;
    };

   useEffect(() => {
       const detour = [];
       let detourNew = [];
        data.forEach((item, i) => {
            dataGraph.push(
            [ 
                item.date,
                item.capacity,
                item.accomplished
            ]);

            detour.push(item.accomplished);
            detourNew.push(item);
            detourNew[i].detour = calcDetour(detour).toFixed(2);
        });

        setDataTable(detourNew);
   }, [dataGraph]);
    
    return (
        <>
            <Navbar 
                logo={logo}
                title="Gestão de atendimentos"
            />
            <div>
                <VerticalNav 
                    data= {[
                        {   
                            title: "Acompanhamento de atendimentos",
                            button: "Dashboard",
                            section: (
                                <>
                                    <Graph 
                                        data={dataGraph}
                                        title="Grafico de atendimentos"
                                        subtitle="Atendimentos de 2020"
                                    />
                                        <Table 
                                        title="Listagem de atendimentos - 2020"
                                        data={dataTable}
                                    />
                                </>
                            ),
                        },
                        {
                            button: "Cadastro",
                            section: (
                                <div>Em desenvolvimento</div>
                            )
                        },
                        {
                            button: "Fornecedor",
                            section: (
                                <div>Em desenvolvimento</div>
                            )
                        },
                        {
                            button: "Cliente",
                            section: (
                                <div>Em desenvolvimento</div>
                            )
                        }
                    ]}
                />
            </div>
        </>
    );
}

export default Home;