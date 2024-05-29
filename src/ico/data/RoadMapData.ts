interface DataType {
   id: number;
   sub_title: string;
   title: string;
   desc: string;
}[];

const road_map_data: DataType[] = [
   {
      id: 1,
      sub_title: "June 2024",
      title: "$PROS Goes Live",
      desc: "To the fucking moon we go! (Man's first step on the moon...literally)",
   },
   {
      id: 2,
      sub_title: "July 2024",
      title: "First Liquidity Injection",
      desc: "Due to our tokenomics a portion from taxes (20%) will be utilized as a liquidity injection. (This will happen at the beginning of every month after taxes are disperssed)",
   },
   {
      id: 3,
      sub_title: "August 2024",
      title: "Second Liquidity Injection",
      desc: "Second liquidity injection takes place. (This will happen at the beginning of every month after Taxes are disperssed)",
   },
   {
      id: 4,
      sub_title: "September 2024",
      title: "Third Liquidity Injection",
      desc: "Third liquidity injection takes place (This will happen at the beginning of every month after Taxes are disperssed)",
   },
   {
      id: 5,
      sub_title: "End Of Q3 2024",
      title: "Q-DIV To $PROS Holder",
      desc: "% of Private Wealth Hedge Fund quarterly profit will be allocated to be dispersed to all $PROS token holders in the form of $USDC. (Description of how quarterly dividends will be allocated is in our WhitePaper. This will happen at the end of every quarter.)",
   },
];

export default road_map_data;