import {BiCheck} from 'react-icons/bi';

type DropDownProps = {
  toggle: boolean;
  onSortByChange: (id: string) => void;
  onOrderByChange: (id: string) => void;
  sortBy : string;
  orderBy : string;  
};

export default function DropDown(props : DropDownProps) {
  const {toggle} = props
  if(!toggle){
    return null;
  }
  return (
    //se toggle true entao ->
    <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div onClick={() => props.onSortByChange('petName')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Pet Name {(props.sortBy === 'petName') && <BiCheck />}</div>
        <div onClick={() => props.onSortByChange('ownerName')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Owner Name {(props.sortBy === 'ownerName') && <BiCheck />}</div>
        <div onClick={() => props.onSortByChange('aptDate')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Date {(props.sortBy === 'aptDate') && <BiCheck />}</div>
        <div onClick={() => props.onOrderByChange('asc')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem">Asc {(props.orderBy === 'asc') && <BiCheck />}</div>
        <div onClick={() => props.onOrderByChange('desc')}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem">Desc {(props.orderBy === 'desc') && <BiCheck />}</div>
      </div>
    </div>
  )
}