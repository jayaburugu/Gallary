import React from "react";

function Gallary({ data }) {
  return (
    <span>
      <span>
        {data.map((img) => (
          <span key={img.id} className="">
            <span>
              <img
                className="p-2"
                src={`https:farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}_m.jpg`}
                height="200"
                width="250"
              />
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}

export default Gallary;
