import ConnectSample from "./connect-sample";
import { useConnectedWallet } from "@terra-money/wallet-provider";
import { MsgExecuteContract } from "@terra-money/terra.js";


export default function Index() {
  const wallet = useConnectedWallet();
  const walletAddress = wallet ? wallet.terraAddress : "";
  const contractAddress = "terra1cf5admygyy2557e57jj7rnf8tucktnp7j629ca"
  const onSub = async (e: any)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    const msg = await new MsgExecuteContract(
      walletAddress,
      contractAddress,
      {
        todos: e.target[0].value
      }
    )
    const txResult = await wallet?.post({msgs:[msg]})
    console.log(txResult)
  }
  return (
    <div>
    <ConnectSample/>
    <h1>Todo</h1>
    <form onSubmit={onSub}>
      <input type="text" />
      <button type="submit">Add</button>
    </form>
    </div>
  );
}
