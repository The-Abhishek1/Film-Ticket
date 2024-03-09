import React from "react";
import t from "./Ticket.module.css";
import qr from "../Images/qrcode.png";
import ticket from "../Images/ticket.png";
import phone from "../Images/phone.png";
import { Close } from "@mui/icons-material";

export default function Ticket() {
  return (
    <div className={t.whole}>
      <div className={t.container}>
        <h4 className={t.h4}>Your Ticket</h4>
        <Close className={t.close} />
        <div className={t.box}>
          <div className={t.items}>
            <div className={t.empty}></div>
            <div className={t.subItems}>
              <h5 className={t.h5}>Prem Ratan Dhan Payo</h5>
              <p className={t.p}>Hindi,2D</p>
              <p className={t.p}>Sat, 01 Oct | 04:00 PM</p>
              <p className={t.p}>Madhan Cinema Hall: Bhadrak</p>
            </div>
          </div>
          <hr />
          <div className={t.items2}>
            <div className={t.qrSub}>
              <img src={qr} alt="" height={100} width={90} />
            </div>
            <div className={t.qrSub}>
              <div className={t.qrSub2}>
                <p className={t.p}>1 Ticket(s)</p>
                <h4 className={t.qh4}>Madhan Talkies</h4>
                <p className={t.p}>Balcony A1</p>
              </div>
              <div className={t.qrSub2}>
                <h5 className={t.qh5}>
                  Booking Id: <br /> <h5 className={t.qh6}>MAGHYEW688SHSTW</h5>
                </h5>
                <p className={t.p}>Tap to see more</p>
              </div>
            </div>
          </div>
          <div className={t.pbox}>
            <p className={t.qp}>
              A confirmation is sent on e-mail/SMS/WhatsApp within 15 minutes of
              booking.
            </p>
          </div>
          <div className={t.icons}>
            <div className={t.icon}>
              <img src={ticket} alt="" height={40} />
              <h6 className={t.ih6}>Cancel booking</h6>
            </div>
            <div className={t.iconn}>
              <img src={phone} alt="" height={30} className={t.i} />
              <h6 className={t.ih6}>Contact support</h6>
            </div>
          </div>
        </div>
        <div className={t.footer}>
          <p className={t.fp}>Total Amount</p>
          <p className={t.fp}>Rs. 113.42</p>
        </div>
      </div>
    </div>
  );
}
