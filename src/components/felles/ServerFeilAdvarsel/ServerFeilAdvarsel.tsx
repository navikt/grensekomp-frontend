import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import './ServerFeilAdvarsel.sass';
import InternLenke from '../InternLenke';
import Key from '../../../locales/Key';
import Oversettelse from '../../../locales/Oversettelse';

interface ServerFeilAdvarselProps {
  onClose: () => void;
  isOpen?: boolean;
}

const ServerFeilAdvarsel = (props: ServerFeilAdvarselProps) => {
  return (
    <ModalWrapper
      isOpen={props.isOpen!}
      onRequestClose={() => props.onClose()}
      closeButton={false}
      className='server-feil-advarsel'
      contentLabel=''
      shouldCloseOnOverlayClick={false}
    >
      <AlertStripeFeil className='server-feil-advarsel--innhold'>
        <Oversettelse langKey={Key.SERVERFEILADVARSEL_INFO} />
        <InternLenke onClick={() => props.onClose()}>Skjul denne meldingen.</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default ServerFeilAdvarsel;
