import style from 'styled-components';

const CardContainer = style.div`
    width: 20%;
    margin: 20px;
    padding: 1px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
    border-radius: 8px;
    cursor:pointer;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
    transform: scale(1.15);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
`

const ImgCard = style.img`
`

function Card({ img }) {
    return (
        <CardContainer>
            <div className="card shadow">
                <ImgCard src={img} />
                <div className="card-body">
                    <p className="card-text">Info curso</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn rounded btn-sm btn-success bg-gradient">Comprar</button>
                            <button type="button" className="btn rounded ms-2 btn-sm btn-primary text-light bg-gradient">Saiba mais</button>
                        </div>

                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default Card;