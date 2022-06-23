import Moralis from 'moralis';
import Core from '@moralisweb3/core';
import Evm from '@moralisweb3/evm';
import WalletConnectConnector from '@moralisweb3/evm-wallet-connect-connector';

declare global {
   interface Window {
     ethereum?: any;
  }
}

describe('Moralis EvmApi', () => {
  let origEthereum: any;

  beforeAll(() => {
    Moralis.Evm.connectors.register(WalletConnectConnector);
  });

  beforeEach(() => {
    Core.registerModules([Evm]);
    origEthereum = window.ethereum;
    window.ethereum = {
      request: () => {},
    };
  });

  afterEach(() => {
    window.ethereum = origEthereum;
  });

  it('should connect via metamask ', async () => {
    let connecting = await Evm.connect('metamask', { silent: false });
    expect(connecting).toBeDefined();
  });
});
