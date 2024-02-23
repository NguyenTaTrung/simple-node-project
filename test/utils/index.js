require('dotenv').config();

module.exports = {
  /**
   * Returns the default Htmlcoin address.
   * @return {String} Default Htmlcoin address.
   */
  getDefaultHtmlcoinAddress: () => {
    if (!process.env.SENDER_ADDRESS) {
      throw Error('Must have SENDER_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.SENDER_ADDRESS));
  },

  /**
   * Returns the Htmlcoin network RPC url.
   * @return {String} The Htmlcoin network RPC url.
   */
  getHtmlcoinRPCAddress: () => {
    if (!process.env.HTMLCOIN_RPC_ADDRESS) {
      throw Error('Must have HTMLCOIN_RPC_ADDRESS in .env');
    }
    return String(Buffer.from(process.env.HTMLCOIN_RPC_ADDRESS));
  },

  /**
   * Returns the wallet passphrase to unlock the encrypted wallet.
   * @return {String} The wallet passphrase.
   */
  getWalletPassphrase: () => (process.env.WALLET_PASSPHRASE ? String(Buffer.from(process.env.WALLET_PASSPHRASE)) : ''),

  isWalletEncrypted: async (qweb3) => {
    const res = await hweb3.getWalletInfo();
    return Object.prototype.hasOwnProperty.call(res, 'unlocked_until');
  },
};
