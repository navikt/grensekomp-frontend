import { Locale } from '../../../locale/Locales';

interface Land extends Locale {
  iso3: string;
}

const landListe: Land[] = [
  { nb: 'Belgia', en: 'Belgium', iso3: 'BEL' },
  { nb: 'Bulgaria', en: 'Bulgaria', iso3: 'BGR' },
  { nb: 'Danmark', en: 'Denmark', iso3: 'DNK' },
  { nb: 'Estland', en: 'Estonia', iso3: 'EST' },
  { nb: 'Finland', en: 'Finland', iso3: 'FIN' },
  { nb: 'Frankrike', en: 'France', iso3: 'FRA' },
  { nb: 'Hellas', en: 'Greece', iso3: 'GRC' },
  { nb: 'Irland', en: 'Ireland', iso3: 'IRL' },
  { nb: 'Island', en: 'Iceland', iso3: 'ISL' },
  { nb: 'Italia', en: 'Italy', iso3: 'ITA' },
  { nb: 'Kroatia', en: 'Croatia', iso3: 'HRV' },
  { nb: 'Kypros', en: 'Cyprus', iso3: 'CYP' },
  { nb: 'Latvia', en: 'Latvia', iso3: 'LVA' },
  { nb: 'Liechtenstein', en: 'Liechtenstein', iso3: 'LIE' },
  { nb: 'Litauen', en: 'Lithuania', iso3: 'LTU' },
  { nb: 'Luxembourg', en: 'Luxembourg', iso3: 'LUX' },
  { nb: 'Malta', en: 'Malta', iso3: 'MLT' },
  { nb: 'Nederland', en: 'Netherlands', iso3: 'NLD' },
  { nb: 'Polen', en: 'Poland', iso3: 'POL' },
  { nb: 'Portugal', en: 'Portugal', iso3: 'PRT' },
  { nb: 'Romania', en: 'Romania', iso3: 'ROU' },
  { nb: 'Slovakia', en: 'Slovakia', iso3: 'SVK' },
  { nb: 'Slovenia', en: 'Slovenia', iso3: 'SVN' },
  { nb: 'Spania', en: 'Spain', iso3: 'ESP' },
  { nb: 'Storbritannia og Nord-Irland', en: 'United Kingdoms', iso3: 'GBR' },
  { nb: 'Sveits', en: 'Switzerland', iso3: 'CHE' },
  { nb: 'Sverige', en: 'Sweden', iso3: 'SWE' },
  { nb: 'Tsjekkia', en: 'Czech Republic', iso3: 'CZE' },
  { nb: 'Tyskland', en: 'Germany', iso3: 'DEU' },
  { nb: 'Ungarn', en: 'Hungary', iso3: 'HUN' },
  { nb: 'Østerrike', en: 'Austria', iso3: 'AUT' },
  { nb: 'Øvrige land', en: 'Other country', iso3: 'XUK' }
];

export default landListe;
