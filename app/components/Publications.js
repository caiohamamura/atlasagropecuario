import React, { Component, PropTypes } from 'react'
import MyModal from '../components/MyModal'
import FieldGroup from '../components/FieldGroup'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {Checkbox} from 'react-bootstrap'


const Publications = props => {

    return (
        <MyModal
            id="publications-modal"
            headerId="publications-header"
            bodyId="publications-body"
            show={props.show ? props.show : false}
            title={props.translation["publications"]}
            onHide={props.handleHide}
            noClose>
            <div>        
                <div className="paper">
                    <h1>Perspectiva Imaflora 3 - Uma análise dos avanços e contradições da agricultura</h1>
                    <img className="publication float-right" src={require("../img/pub_thumb_1.PNG")} alt="publication thumbnail"/>
                    <p>A agricultura brasileira cresceu muito e passou por profundas transformações nas últimas quatro décadas. A enorme geração de riqueza da agricultura permanece 
                        associada a grandes impactos ambientais e sociais e desigualdades. A complexa e controversa geopolítica contemporânea tem influenciado a expansão e a intensificação 
                        do setor e o seu futuro para a economia e a sociedade brasileira e internacional.</p>
                    <p>Este texto organiza e analisa informações sobre a evolução do setor, destacando os seus avanços e contradições.</p> 
                    <a className="downloadPublication" href="http://www.imaflora.org/downloads/biblioteca/583420241a0d5_Perspectiva_Imaflora_3_novembro_2016_Umaanlisedosavanosecontradiesdaagricultura.pdf" target="_blank">{props.translation['downloadPublication']}</a>
                </div>
            
                <div className="paper">
                    <h1>Sustentabilidade em debate 3 - Sustainability is good business for agriculture</h1>
                    <img className="publication float-left" src={require("../img/pub_thumb_2.PNG")} alt="publication thumbnail"/>
                    <p>This issue of Sustentabilidade em Debate brings together three studies that complement each other with the aim of answering the same question: can the adoption 
                        of good management practices for production, conservation of natural resources and working conditions be justified economically? In other words, is the adoption 
                        or pursuit of sustainability a good deal for farmers?</p>
                    <p>Based on robust methods, the three studies analyzed large databases that contain information from dozens of farmers covered by programs designed to stimulate 
                        sustainability in several regions of Brazil either through the provision of credit, technical assistance or certification.</p> 
                        <a className="downloadPublication" href="http://www.imaflora.org/download.php?d=downloads/biblioteca/57064a534ab20_Sustentabildadeemdebate3Sustainabilityisgoodbusinessforagricultureapril2016.pdf" target="_blank">{props.translation['downloadPublication']}</a>
                </div>
            
                <div className="paper">
                    <h1>Sustentabilidade em debate 3 - A sustentabilidade é um bom negócio para a agricultura</h1>
                    <img className="publication float-right" src={require("../img/pub_thumb_3.PNG")} alt="publication thumbnail"/>
                    <p>Esta edição do Sustentabilidade em Debate reúne três estudos que se complementam para responder à mesma pergunta: a adoção de boas práticas de gestão, produção, 
                        conservação de recursos naturais e condições de trabalho na agropecuária se justificam economicamente? Em outras palavras, a adoção ou busca pela sustentabilidade
                        é um bom negócio para o produtor?</p>
                    <p>Os três estudos analisaram com métodos robustos grandes bancos de dados que reúnem informações de dezenas de produtores sujeitos a programas que incentivam a 
                        sustentabilidade em diversas regiões do Brasil, seja pelo crédito, assistência técnica ou certificação.</p> 
                        <a className="downloadPublication" href="http://www.imaflora.org/downloads/biblioteca/57026b6ec5982_sustentabilidade_debate_3.pdf" target="_blank">{props.translation['downloadPublication']}</a>
                </div>
            
                <div className="paper">
                    <h1>Sustentabilidade em debate 2 - A FUNCIONALIDADE DA AGROPECUÁRIA BRASILEIRA (1975 A 2020)</h1>
                    <img className="publication float-left" src={require("../img/pub_thumb_4.PNG")} alt="publication thumbnail"/>
                    <p>Pela primeira vez a safra brasileira foi analisada com uma abordagem funcional. A funcionalidade foi definida pela importância dos produtos agropecuários em prover
                        proteína, energia metabolizável e energia não metabolizável. Estes três componentes são os elementos básicos para a alimentação humana e animal e a geração de energia.
                        Isolando-se os elementos básicos de cada produto, é possível somá-los, agregá-los e compará-los, mantendo uma coerência analítica. Isto permite comparar o valor funcional 
                        de culturas e produtos distintos, como soja, banana, mandioca e boi.</p><p>Verificamos que a agricultura produz uma quantidade muito maior de proteína e energia do que a pecuária
                            e com eficiência muito superior.</p> 
                            <a className="downloadPublication" href="http://www.imaflora.org/downloads/biblioteca/56a7b193a2f96_Sustentabildadeemdebate2-analisefuncionalsafradezembro2015final.pdf" target="_blank">{props.translation['downloadPublication']}</a>
                </div>
            </div>
             <br />
        </MyModal>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        translation: state.translation,
    }
}


export default connect(mapStateToProps)(Publications);