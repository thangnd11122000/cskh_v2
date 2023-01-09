import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GuestLayout = ({ children }) => {
  return (
    <div className="user-layout-container">
      <Head>
        <title>CSKH</title>
      </Head>
      <div
        className="content"
        style={{
          background: "transparent",
          marginTop: 120,
          marginBottom: 140,
        }}
      >
        <div className="top">
          <div className="header" style={{ marginBottom: 32 }}>
            <Link href="/">
              <Image
                style={{
                  width: 400,
                }}
                src="/static/images/logo.png"
                alt="CSKH"
              />
            </Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default GuestLayout;
