/* eslint-disable react/prop-types */
// border-[${props.color}]


function Card(props) {
  return (
<>
    <div className={`border-t-[16px] border-[#3B82F6] p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 `}>
      <h1 className='text-2xl font-bold bg-white text-left'>{props.title}</h1>
      <p className="py-4 bg-white text-left">{props.info}</p> 
    </div>
    </>
  );
}

export default Card;
