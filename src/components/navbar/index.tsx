import React from 'react';
import Wrapper from './style';
import Image from 'next/image';

const Navbar = () => {
  return (
    <Wrapper.Navbar>
      <div>
        <Image
          src="/assets/logo.svg"
          objectFit="contain"
          alt="ChatGuru"
          width={200}
          height={100}
        />
        <p>
          👨‍💻 Brought to you by&nbsp;
          <a
            href="https://kleialiaj.vercel.app/"
            title="wardvisual"
            target="_blank"
            rel="noreferrer"
          >
            https://kleialiaj.vercel.app/
          </a>
        </p>
        <p>
          ⭐ Was it useful?&nbsp;
          <a
            href="https://github.com/"
            title="ChatGuru"
            target="_blank"
            rel="noreferrer"
          >
            Give it a star
          </a>
        </p>
      </div>
    </Wrapper.Navbar>
  );
};

export default Navbar;
