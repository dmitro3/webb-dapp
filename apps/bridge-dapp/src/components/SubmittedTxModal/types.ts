import { BRIDGE_TABS } from '../../constants';

interface Props {
  /**
   * The transaction type to display in the modal
   * if not provided, the modal will display the default
   * transaction type
   * @default 'transaction'
   */
  txType?: (typeof BRIDGE_TABS)[number];
}

interface PropsWithExplorerUrl extends Props {
  /**
   * Explorer url to the transaction
   */
  txExplorerUrl: URL;
}

interface PropsWithTxHash extends Props {
  /**
   * The transaction hash
   */
  txHash: string;
}

export type SubmittedTxModalProps = PropsWithExplorerUrl | PropsWithTxHash;
