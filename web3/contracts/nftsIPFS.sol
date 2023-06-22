// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract nftsIPFS {

  address payable contractOwner = payable(0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0);

  uint256 public listingPrice = 0.25 ether;


  struct NFTs {
    string title;
    string description;
    string email;
    string category;
    uint256 fundraised;
    address creator;
    string image;
    uint256 timestamp;
    uint256 id;
  }

  mapping (uint256 => NFTs) public nftImages;

  uint256 public imagesCount = 0;

  function uploadIPFS(
    address _creator, string memory _image, 
    string memory _title, string memory _description, 
    string memory _email, string memory _category
  ) public payable returns(
      string memory, 
      string memory, 
      string memory, 
      address, 
      string memory
    ) {
    imagesCount++;
    NFTs storage nft = nftImages[imagesCount];

    nft.title = _title;
    nft.creator = _creator;
    nft.description = _description;
    nft.email = _email;
    nft.category = _category;
    nft.image = _image;
    nft.timestamp = block.timestamp;
    nft.id = imagesCount;

    return(
      _title,
      _description,
      _category,
      _creator,
      _image
    );

  }

  function getAllNFTs() public view returns (NFTs[] memory) {
    uint256 itemCount = imagesCount;
    uint256 currentIndex = 0;

    NFTs[] memory items = new NFTs[](itemCount);
    for (uint256 i = 0; i < itemCount; i++) {
      uint256 currentId = i +1;
      NFTs storage currentItem = nftImages[currentId];
      items[currentIndex] = currentItem;
      currentIndex += 1;
    }
    return items;
  }

  //+ RESTART HERE 
  
  // TODO  👇
  //: CREATE GETIMAGE FUNCTION

}