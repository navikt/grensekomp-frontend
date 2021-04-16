import landListe from '../../components/bulk/Bostedland/landListe';

const mapIsoTilLand = (isoKode) => {
  const funnetLand = landListe.find((land) => land.iso3 === isoKode);

  return funnetLand?.navn;
};

export default mapIsoTilLand;
