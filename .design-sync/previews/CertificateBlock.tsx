import { CertificateBlock } from 'BLRT-group-website';

export const TwoCerts = () => (
  <div className="p-6 bg-background">
    <CertificateBlock certificates={[
      { name: 'ISO 9001:2015', issuer: 'Bureau Veritas', year: 2022 },
      { name: 'ISO 14001:2015', issuer: 'Bureau Veritas', year: 2022 },
    ]} />
  </div>
);

export const FullSet = () => (
  <div className="p-6 bg-background">
    <CertificateBlock certificates={[
      { name: 'ISO 9001:2015', issuer: 'Bureau Veritas', year: 2022 },
      { name: 'ISO 14001:2015', issuer: 'Bureau Veritas', year: 2022 },
      { name: 'OHSAS 18001', issuer: 'SGS', year: 2021 },
      { name: "Lloyd's Register", issuer: 'LR' },
    ]} />
  </div>
);

export const SingleCert = () => (
  <div className="p-6 bg-background">
    <CertificateBlock certificates={[
      { name: 'DNV GL Class Approval', issuer: 'Det Norske Veritas', year: 2023 },
    ]} />
  </div>
);
