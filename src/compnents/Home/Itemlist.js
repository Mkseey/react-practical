import React from "react";
function ItemList({ word, index, removeword }) {
    return (
        <div className=" card col-5 ms-4 ">
            <div className="list-group list-group-flush, list-group list-group-numbered " >
                <li className="list-group-item  mt-1">
                    {word.text}
                    <button
                        className="btn btn-danger  btn-sm  mx-5"
                        onClick={() => removeword(index)}
                        type="button"
                    >
                        x
                    </button>
                </li>
            </div>
        </div>
    );
}

export default ItemList;
