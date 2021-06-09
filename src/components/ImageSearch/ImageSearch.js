import React,{useState} from "react";


const ImageSearch = ({searchText}) => {

    console.log(searchText);
  
    const [text,setText] = useState('');
    

    const onSubmit =(e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit}  action="" className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input onChange={e => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full
            text-white mr-3 py-1 px-2 leading-tight  focus:outline-none  placeholder-green-400 placeholder-opacity-90"
            type="text" placeholder="Search Your favorite Image...." />
            <button
              className="focus:outline-none text-sm border-4 text-blue py-1 px-2 rounded text-green-500 cursor-pointer "
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
  );
};

export default ImageSearch;
