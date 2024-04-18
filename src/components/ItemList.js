import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	
	const dispatch = useDispatch(addItem());
	
	return (
		<div>
			{items.map((x) => (
				<div
					data-testid= "fooditems"
					className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between "
					key={x?.card?.info?.id}>
					<div className="w-9/12">
						<div className="py-2">
							<span className="mb-1 pb-1 mt-2 font-semibold">
								{x?.card?.info?.name}{" "}
							</span>
							<span>
								- ₹{" "}
								{x.card.info.price
									? x.card.info.price / 100
									: x.card.info.defaultPrice / 100}
							</span>
						</div>
						<p className="mb-2 pb-2 text-sm">
							{x?.card?.info?.description}
						</p>
					</div>

					<div className="w-3/12">
						<button data-testid = "addbtn" className="p-2 bg-black text-white shadow-md absolute m-auto rounded-b-md" 
								onClick={()=> {
									//Dispatch a action
									dispatch(addItem(x))
									}}>
							Add +
						</button>
						<img
							className="text-right"
							alt="No Image Provided"
							src={CDN_URL + x?.card?.info?.imageId}></img>
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;

//.card.info.name
