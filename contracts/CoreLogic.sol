// Things Left TO Do
//DAI
//token integration
//reward distribution

pragma solidity >=0.4.22 <0.9.0;
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract Price {
AggregatorV3Interface internal priceFeed;

constructor() public {
        priceFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
uint initPrice=price;
uint finalPrice;

mapping(address => bool) isBetting;
address[] public forArray;
address[] public againstArray;

uint forPrice = 10;
uint againstPrice = 7;

function updateForPrice(uint _newPrice) public{
	forPrice = _newPrice;
}

function updateAgainstPrice(uint _newPrice) public{
	againstPrice = _newPrice;
}


function resultChange(uint initPrice){
	finalPrice = price;
	
	if (finalPrice >= initPrice) {
rewardsDistribution(forArray);
}
	else{
		rewardsDistribution(againstArray);
}
	
	initPrice = price;
	
}

function forBetting() public {
	require(!isBetting[msg.sender], “You can bet only once”);
	
	daiToken.transferFrom(msg.sender, address(this), forPrice) ;
	forArray.push(msg.sender);
	
isBetting[msg.sender] = true;
}


function againstBetting() public {
	require(!isBetting[msg.sender], “You can bet only once”);
	
	daiToken.transferFrom(msg.sender, address(this), againstPrice) ;
	againstArray.push(msg.sender);
	
isBetting[msg.sender] = true;
}

function rewardsDistribution(address[] _arrayWinner) public {
	
	Address[] winner = _arrayWinner;
	//Distribute with Superfluid

}


