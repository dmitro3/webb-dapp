import { FC, useState } from 'react';
import Link from 'next/link';
import { TangleLogo, Typography } from '@webb-tools/webb-ui-components';
import { Close } from '@webb-tools/icons';
import { Navbar, InternalOrExternalLink } from '.';

interface HeaderProps {
  hideBanner?: boolean;
}

export const Header: FC<HeaderProps> = (props) => {
  const { hideBanner = false } = props;

  const [showBanner, setShowBanner] = useState(!hideBanner);

  return (
    <header className="sticky flex flex-col top-0 z-50 bg-mono-0 min-h-[72px] webb-shadow-sm">
      {/* Banner */}
      {showBanner && (
        <div className="bg-[#624FBE] p-2 lg:order-2 relative">
          <Typography
            variant="mkt-body2"
            className="block text-center max-w-[80%] mx-auto !text-mono-0 !font-bold leading-[24px]"
          >
            TANGLE NETWORK CROWDLOAN IS HAPPENING SOON ✨ |{' '}
            <InternalOrExternalLink url="#" className="inline-block">
              <span className="!text-mono-0 capitalize underline">
                Join Waitlist!
              </span>
            </InternalOrExternalLink>
          </Typography>
          <Close
            onClick={() => {
              setShowBanner(false);
            }}
            className="fill-mono-0 absolute top-1.5 right-2 md:right-5 w-6 h-6"
          />
        </div>
      )}

      {/* Nav */}
      <div className="w-full max-w-[1440px] mx-auto px-[20px] lg:px-0 py-4 lg:order-1">
        <div className="lg:px-[11.25%] flex items-center justify-between">
          <Link href="/">
            <TangleLogo />
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};
