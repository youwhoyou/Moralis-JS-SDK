import { Moralis } from 'moralis';
import Core, { EvmAddress } from '@moralisweb3/core';
import Evm from '@moralisweb3/evm';
import WalletConnectConnector from '@moralisweb3/evm-wallet-connect-connector';

Moralis.Evm.connectors.register(WalletConnectConnector);

// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }
//   you can uncoment the line above

describe('Moralis EvmApi', () => {
  let origEthereum;
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
