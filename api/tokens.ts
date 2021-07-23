import { NowRequest, NowResponse } from "@vercel/node";
import { TokenAddress } from "../utils/tokens";
import { WagyuVusdtPrice } from "../utils/wagyuUtils";

export default async (_req: NowRequest, res: NowResponse) => {
  const wagyuVusdtPrice = await WagyuVusdtPrice();
  const response = {
    update_at: new Date().getTime(),
    data: {
      [TokenAddress.Wagyu]: {
        name: 'WAGYU',
        symbol: 'WagyuSwap Token',
        price: wagyuVusdtPrice.toFixed(4),
        price_VLX: '0',
      }
    }
  };
  res.status(200).send(response);
};
