import { EvmApi } from '../../src/EvmApi';
import { Erc20Transfer } from '@moralisweb3/evm-utils';
import { cleanEvmApi, setupEvmApi } from '../setup';

describe('getTokenTransfers', () => {
  let evmApi: EvmApi;

  beforeAll(() => {
    evmApi = setupEvmApi();
  });

  afterAll(() => {
    cleanEvmApi();
  });

  function assertTransfer(transfer: Erc20Transfer) {
    expect(transfer).toBeDefined();
    expect(transfer.blockHash).toBe('0x0cd840fb6f116b8dd39ba8c30e3b74d741ecb638c4a8d0704801e7d18baaef05');
    expect(transfer.blockNumber.toString()).toBe('15454126');
    expect(transfer.value.toString()).toBe('347995260860000000000');
    expect(transfer.fromAddress.checksum).toBe('0xd73a9EAdFff6A332aFDa7dDBB18CFf84bBf6dd0D');
    expect(transfer.toAddress.checksum).toBe('0x72FDD62FbFa2fAa9A8677C58d9992068772e0f7F');
  }

  it('returns transfers', async () => {
    const response = await evmApi.token.getTokenTransfers({
      address: '0x72FDD62FbFa2fAa9A8677C58d9992068772e0f7F',
    });

    expect(response.pagination.total).toEqual(12);
    expect(response.pagination.page).toEqual(0);
    expect(response.pagination.pageSize).toEqual(100);
    expect(response.result.length).toEqual(12);

    assertTransfer(response.result[0]);
  });
});
