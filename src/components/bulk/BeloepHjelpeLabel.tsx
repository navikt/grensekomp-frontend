import React, { useState } from 'react';
import 'nav-frontend-tabell-style';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';
import ModalWrapper from 'nav-frontend-modal';
import Veilederpanel from 'nav-frontend-veilederpanel';
import './BeloepHjelpeLabel.scss';
import LeggTilKnapp from '../felles/knapper/LeggTilKnapp';
import SmilendeKar from '../oversikt-krav/SmilendeKar';
import { useTranslation } from 'react-i18next';
import LangKey from '../../locales/LangKey';
import Oversettelse from '../../locales/Oversettelse';

const HjelpetekstIkon = (
  <svg
    className='hjelpetekst__ikon'
    width='32'
    height='32'
    focusable='false'
    viewBox='0 0 18.2 18.2'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9.1 0C4.1 0 0 4.1 0 9.1s4.1 9.1 9.1 9.1 9.1-4.1 9.1-9.1S14.1 0 9.1 0zm0 17.2C4.6 17.2 1 13.6 1 9.1S4.6 1
    9.1 1s8.1 3.6 8.1 8.1-3.6 8.1-8.1 8.1z'
    />
    <circle cx='9.1' cy='13.8' r='.9' />
    <path
      d='M9.1 11.5c-.3 0-.5-.2-.5-.5V8.6c0-.3.2-.5.5-.5 1 0 1.9-.8 1.9-1.9s-.8-1.9-1.9-1.9c-1 0-1.9.8-1.9 1.9 0
    .3-.2.5-.5.5s-.5-.2-.5-.4c0-1.6 1.3-2.9 2.9-2.9S12 4.7 12 6.3c0 1.4-1 2.6-2.4 2.8V11c0 .3-.2.5-.5.5z'
    />
  </svg>
);

const Sprsml = () => HjelpetekstIkon;

const BeloepHjelpeLabel = () => {
  const [eksempelOpen, setEksempelOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleCloseButton = (evt) => {
    evt.preventDefault();
    setEksempelOpen(false);
  };

  const handleOpenButton = (evt) => {
    evt.preventDefault();
    setEksempelOpen(true);
  };

  return (
    <div className='beloephjelpelabel'>
      <span className='hjelpetekst-beskrivelse'>{t(LangKey.BEREGNET_INNTEKT)}</span>
      <div className='hjelpetekst-refusjon'>
        <ModalWrapper
          isOpen={eksempelOpen}
          onRequestClose={() => setEksempelOpen(false)}
          closeButton={false}
          contentLabel={t(LangKey.BEREGNING_INNTEKT)}
          className='eksempel-modal'
        >
          <Veilederpanel svg={<SmilendeKar />}>
            <Undertittel>{t(LangKey.BEREGNING_INNTEKT)}</Undertittel>
            <Normaltekst>
              <Oversettelse langKey={LangKey.BELOEP_HJELPE_INFO} />
            </Normaltekst>
            <LeggTilKnapp className='lukke-knapp' onClick={(evt) => handleCloseButton(evt)}>
              {t(LangKey.CLOSE)}
            </LeggTilKnapp>
          </Veilederpanel>
        </ModalWrapper>
        <div className='hjelpetekst'>
          <button role='link' className='hjelpetekst__apneknapp' onClick={(evt) => handleOpenButton(evt)}>
            <Sprsml />
            <span className='sr-only'>{t(LangKey.HELP)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeloepHjelpeLabel;
