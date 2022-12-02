"use strict";
exports.id = 390;
exports.ids = [390];
exports.modules = {

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ hooks),
  "Re": () => (/* binding */ useObserve),
  "Os": () => (/* binding */ useWallet),
  "$6": () => (/* binding */ useWeb3)
});

// UNUSED EXPORTS: useGeolocation

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(8519);
var external_web3_default = /*#__PURE__*/__webpack_require__.n(external_web3_);
;// CONCATENATED MODULE: ./web3.config.js
// PLN 배포한 스마트 컨트랙트 주소와 ABI 변경
const MINT_NFT_CONTRACT = "0x1C2B3691758aB002B91bf284Dd69699920Ccdcbf";
const MINT_NFT_ABI = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string"
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string"
            },
            {
                internalType: "string",
                name: "_metadataURI",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "_totalNFT",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }
        ],
        name: "batchMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "mintNFT",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            }
        ],
        name: "getNFTs",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "operator",
                type: "address"
            }
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "metadataURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256"
            }
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4"
            }
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        name: "tokenByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            }
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            }
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalNFT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];

;// CONCATENATED MODULE: ./hooks/index.tsx



const useObserve = ()=>{
    const [isObserved, setIsObserved] = (0,external_react_.useState)(false);
    const dom = (0,external_react_.useRef)(null);
    const observer = (0,external_react_.useRef)(null);
    const observe = ()=>{
        if (dom.current) {
            observer.current = new IntersectionObserver((entries)=>{
                if (entries[0].isIntersecting) setIsObserved(true);
                else setIsObserved(false);
            });
            observer.current.observe(dom.current);
            return ()=>observer.current && observer.current.disconnect;
        }
    };
    (0,external_react_.useEffect)(()=>{
        observe();
    }, [
        dom
    ]);
    return {
        isObserved,
        dom
    };
};
const useWallet = ()=>{
    const [account, setAccount] = (0,external_react_.useState)("");
    const addBnbTestNet = async ()=>{
        try {
            await window.ethereum.request({
                mothod: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: "0x61",
                        chainName: "Smart Chain - Testnet",
                        nativeCurrency: {
                            name: "tBNB",
                            symbol: "tBNB",
                            decimals: 18
                        },
                        rpcUrls: [
                            "https://data-seed-prebsc-1-s1.binance.org:8545"
                        ],
                        blockExplorerUrls: [
                            "https:/testnet.bscscan.com"
                        ]
                    }
                ]
            });
        } catch (err) {
            console.error("network adding error - ", err);
        }
    };
    const switchChainToBnb = async ()=>{
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [
                    {
                        chainId: "0x61"
                    }
                ]
            });
        } catch (err) {
            console.error(err);
            // 4092에러 : 네트워크 없음
            if (err.code === 4902) addBnbTestNet();
        }
    };
    const getAccount = async ()=>{
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                // setAccount(accounts[0]);
                //커스텀
                if (window.ethereum.chainId === "0x61" || window.ethereum.chainId === 97) {
                    setAccount(accounts[0]);
                } else {
                    switchChainToBnb();
                }
            } else {
                alert("Install MetaMask!!!");
            }
        } catch (error) {
            console.error(error);
        }
    };
    return {
        account,
        getAccount
    };
};
const useWeb3 = ()=>{
    const [web3, setWeb3] = (0,external_react_.useState)();
    const [mintContract, setMintContract] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (!window.ethereum) return;
        setWeb3(new (external_web3_default())(window.ethereum));
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!web3) return;
        setMintContract(new web3.eth.Contract(MINT_NFT_ABI, MINT_NFT_CONTRACT));
    }, [
        web3
    ]);
    return {
        web3,
        mintContract
    };
};
const useGeolocation = ()=>{
    const [location, setLocation] = (0,external_react_.useState)({
        loaded: false,
        coordinates: {
            lat: 0,
            lng: 0
        }
    });
    // 성공에 대한 로직
    const onSuccess = (location)=>{
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    };
    // 에러에 대한 로직
    const onError = (error)=>{
        setLocation({
            loaded: true,
            error
        });
    };
    (0,external_react_.useEffect)(()=>{
        // navigator 객체 안에 geolocation이 없다면
        // 위치 정보가 없는 것.
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                message: "Geolocation not supported"
            });
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);
    return location;
};
/* harmony default export */ const hooks = (useGeolocation);


/***/ })

};
;