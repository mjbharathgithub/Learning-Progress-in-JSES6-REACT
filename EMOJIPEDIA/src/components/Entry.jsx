import React from "react";

function Entry(data){
  return(
  <dl className="dictionary">
<div className="term">
  <dt>
    <span className="emoji" role="img" aria-label="Tense Biceps">
      {data.emoji}
    </span>
    <span>{data.name}</span>
  </dt>
  <dd>
    {data.meaning}
  </dd>
</div>

</dl>);
}

export default Entry;