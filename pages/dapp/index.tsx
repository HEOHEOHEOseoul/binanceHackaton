import { Button, Flex, Grid, Text } from '@chakra-ui/react';
import { claimContract, mintNftTokenContract } from 'contracts';
import useGeolocation, { useWallet, useWeb3 } from 'hooks';
import { NextPage } from 'next';
import React, { FC, useEffect, useState } from 'react'

const Dapp : NextPage = () => {
    // const [newNftCard, setNewNftCard] = useState<string>();
    // const [userBalance, setUserBalance] = useState<string>();
    const [quantity, setQuantity] = useState<number>(1);
    const { account, getAccount } = useWallet();
    const onClickWallet = () => {
      getAccount();
    };
    const { mintContract } = useWeb3();
    const location = useGeolocation();
    const [message, setMessage] = useState<String>('Claim now! if you are in the spot');

    const onClickClaim = async() => {
      // try {
      //   if(!account || location.loaded) return;
      //   if(location.coordinates?.lat && location.coordinates.lat <= location.coordinates.lat + 0.001 &&
      //     location.coordinates.lat >= location.coordinates.lat - 0.001 &&
      //     location.coordinates.lng <= location.coordinates.lng + 0.001 &&
      //     location.coordinates.lng >= location.coordinates.lng - 0.001
      //      ){
      //       const response = await claimContract.methods.Claim(location.coordinates)
      //           .send({ from: account })
      //           console.log(response)
      //           setMessage('Success')
      //   }else {
      //     setMessage('Fail')
      //   }
      // }catch(err) {
      //   console.error(err)
      // }
    }


    const onClickMint = async() => {
        try {
            if(!account) return;

            const response = await mintContract.methods.mintNFT(quantity)
            .send({ from: account })
            console.log(response)

            if(response.status) {
                const balanceLength = await mintContract.methods
                .balanceOf(account)
                .call();

                const nftTokenId = await mintContract.methods
                .tokenOfOwnerByIndex(account, parseInt(balanceLength.length, 10)-1).call();
                
            }

        }catch(err) {
            console.log(err)
        }
    }
    /**유저 잔고조회 */
    // const getUserBalance = (userAddress:any) => {
    //     window.ethereum.request({method: 'eth_getBalance', params: [userAddress, 'latest']})
    //     .then((balance:any) => {
    //         setUserBalance(ethers.utils.formatEther(balance).substring(0,5))
    //         console.log(ethers.utils.formatEther(balance))
    //     })
    // }

    

    return (
      
        <Flex
          minH="100vh"
          justifyContent="center"
          alignItems="center"
          pt={24}
          flexDir="column"
        >
          {account ? 
          <div>
            {/* <Text mb={8} fontWeight="bold" fontSize="4xl"> */}
              <Text>Your Account : {account}</Text>
              <Text>Your Balance : </Text>
              <Text>체험하려면 먼저 민팅하세요</Text>
              <Button onClick={onClickMint}>Mint</Button>
            {/* </Text> */}
            <div>
              {location.loaded
                ? "위도 : "+location.coordinates?.lat + "경도 : " + location.coordinates?.lng
              : "GPS 미확인"}
            </div>
            <div>
              <Button onClick={onClickClaim}>Claim</Button>
              <Text>{message}</Text>
            </div>
          </div>
          :
          <div>
            <Text>지갑을 먼저 연결하세요!</Text>
            <Button onClick={onClickWallet}>Connect Wallet</Button>
          </div>}
          {/* <Grid templateColumns="repeat(4, 1fr)" gap={8}>
            
          </Grid> */}
        
        
      </Flex>
    )
}

export default Dapp;