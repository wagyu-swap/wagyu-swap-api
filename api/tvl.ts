import { NowRequest, NowResponse } from "@vercel/node";

export default (_req: NowRequest, res: NowResponse) => {
  const response = {
    id: 'velas_wagyuswap',
    chain: 'velas',
    name: 'WagyuSwap',
    site_url: 'https://staging.wagyuswap.com',
    logo_url: '',
    has_supported_portfolio: true,
    tvl: 7197010994.253736
  };
  res.status(200).send(response);
};
