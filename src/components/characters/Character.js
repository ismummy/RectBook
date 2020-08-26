import React from "react";
import './Character.css'

const Character = ({character}) => (
    <div className="col-xs-6 col-sm-4 col-md-3">
        <div className="image-flip">
            <div className="mainflip flip-0">
                <div className="frontside">
                    <div className="card">
                        <div className="card-body text-center">
                            <p><img className=" img-fluid"
                                    src="https://picsum.photos/200/?random"
                                    alt="card"/></p>
                            <h4 className="card-title">{character.name}</h4>
                            <p className="card-text">I am a {character.gender}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Character;