import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";

import coinIcon from "../../assets/common/material/coin.png";
import honor1Icon from "../../assets/common/material/honor_1.png";
import honor2Icon from "../../assets/common/material/honor_2.png";
import honor3Icon from "../../assets/common/material/honor_3.png";
import honor4Icon from "../../assets/common/material/honor_4.png";
import jewelIcon from "../../assets/common/material/jewel.png";
import livePointIcon from "../../assets/common/material/live_point.png";
import slotIcon from "../../assets/common/material/slot.png";
import virtualCoinIcon from "../../assets/common/material/virtual_coin.png";
import skillPracticeTicket1 from "../../assets/common/material/ticket1.png";
import skillPracticeTicket2 from "../../assets/common/material/ticket2.png";
import skillPracticeTicket3 from "../../assets/common/material/ticket3.png";
// import gachaTicket from "../../assets/common/material/gacha_ticket.png";
import overThe3Ticket from "../../assets/common/material/over_the_3_ticket.png";

const materialMap = {
  coin: coinIcon,
  honor: ["", honor1Icon, honor2Icon, honor3Icon, honor4Icon],
  jewel: jewelIcon,
  paid_jewel: jewelIcon,
  live_point: livePointIcon,
  slot: slotIcon,
  virtual_coin: virtualCoinIcon,
  skill_practice_ticket: [
    "",
    skillPracticeTicket1,
    skillPracticeTicket2,
    skillPracticeTicket3,
  ],
  gacha_ticket: overThe3Ticket,
  over_the_3_ticket: overThe3Ticket,
};

const CommonMaterialIcon: React.FC<{
  materialName: string;
  materialId?: number;
  quantity?: number;
  mini?: boolean;
}> = ({ materialName, materialId, quantity, mini = false }) => (
  <Grid container direction="row" alignItems="center" spacing={1}>
    <Grid item xs={mini ? 4 : 12}>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Image
            src={
              materialId
                ? materialMap[materialName as "honor"][materialId]
                : materialMap[materialName as "coin"]
            }
            alt={`material ${materialName} ${materialId}`}
            style={{
              height: mini ? "32px" : "64px",
              width: mini ? "32px" : "64px",
            }}
            bgColor=""
            duration={0}
          ></Image>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={mini ? 8 : 12}>
      <Grid container justifyContent="flex-end">
        <Grid item>
          {!Number.isNaN(Number(quantity)) ? (
            <Typography variant="body2">{quantity}</Typography>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default CommonMaterialIcon;
