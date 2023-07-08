import Image from "next/image";
import React, { useEffect, useState } from "react";

//: INTERNAL IMPORTS
import images from "../Image/index";
import Style from "./Filter.module.css";

const Filter = ({ 
  activeSelect, 
  setActiveSelect,
  setImagesCopy, 
  imagesCopy,
  setAllImages,
  allImages,
  oldImages, 
}) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  //: SEARCH AND FILTER IMAGE CREATOR FUNCTION
  const onHandleSearch = (value) => {
    const filteredImages = allImages.filter(({ owner }) => 
      owner.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredImages.length === 0) {
      setAllImages(imagesCopy);
    } else {
      setAllImages(filteredImages);
    }
  };

  const onClearSearch = () => {
    if (allImages.length && imagesCopy.length) {
      setAllImages(imagesCopy);
    }
  };

  //: INPUT TEXT FUNCTION
  useEffect(() => {
    const timer = setTimeout(() => setSearch(debouncedSearch), 1000);
  
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  useEffect(() => {
    setAllImages(oldImages);
    setImagesCopy(oldImages);

    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  const filter = [
    {
      name: "Old Images",
    },
    {
      name: "Last Images",
    },
  ];

  useEffect(() => {
    if (activeSelect == "Old Images") {
      setAllImages(oldImages);
    } else {
      setAllImages(oldImages.reverse());
    }
  }, [activeSelect]);
  
  
  return (
    <div className={Style.filter}>
      <div className={Style.filter_container}>
        <Image 
          src={images.search} 
          alt={"NFT creation"}
          width={20}
          height={20} 
        />
        <input 
          type="text"
          placeholder="Search awesome address..."
          onChange={(e) => setDebouncedSearch(e.target.value)}
          value={debouncedSearch}
          className={Style.filter_input} />
      </div>

      <div 
        className={Style.filter_content}
        onClick={() =>(toggle ? setToggle(false) : setToggle(true))}
      >
        <div className={Style.filter_content_title}>
        <h4>{activeSelect}</h4>
        <Image 
          src={images.arrow} 
          width={10}
          height={10}
        />
        </div>

        {toggle && (
          <div className={Style.filter_creator_container}>
            {filter.map((el, i) => (
              <p 
                key={i}
                onClick={() => setActiveSelect(el.name)}
              >
                {el.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;