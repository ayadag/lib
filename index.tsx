import React, { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import {
  AirdropView,
  ContactView,
  CreateView,
  DonateView,
  FaqView,
  FeatureView,
  HomeView,
  OfferView,
  TokenMetata,
  ToolView,
} from '../views';

const Home: NextPage = (props) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetaData, setOpenTokenMetaData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);
  return (
    <>
      <Head>
        <title>Solana Token Creator</title>
        <meta name="Solana token creator"
        content='Build and create solana token' 
        />
      </Head>

        <HomeView setOpenCreateModal={setOpenCreateModal} />
        
        <ToolView 
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
        />

        <FeatureView 
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetaData={setOpenTokenMetaData}
        />

        <OfferView />
        <FaqView />
        {/* //DYNAMIC COMPONENT */}
        {openCreateModal && (
          <div className='new_loader relative h-full bg-state-900'>
            <CreateView setOpenCreateModal={setOpenCreateModal} />
          </div>
        )}

        {openTokenMetaData && (
          <div className='new_loader relative h-full bg-state-900'>
            <TokenMetata setOpenTokenMetaData={setOpenTokenMetaData} />
          </div>
        )}

        {openContact && (
          <div className='new_loader relative h-full bg-state-900'>
            <ContactView setOpenContact={setOpenContact} />
          </div>
        )}

        {openAirdrop && (
          <div className='new_loader relative h-full bg-state-900'>
            <AirdropView setOpenAirdrop={setOpenAirdrop} />
          </div>
        )}

        {openSendTransaction && (
          <div className='new_loader relative h-full bg-state-900'>
            <DonateView setOpenSendTransaction={setOpenSendTransaction} />
          </div>
        )}

        
    </>
  );
};

export default Home;
