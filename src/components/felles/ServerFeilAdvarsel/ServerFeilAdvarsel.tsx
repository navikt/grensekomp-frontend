import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import './ServerFeilAdvarsel.sass';
import InternLenke from '../InternLenke';
import LangKey from '../../../locale/LangKey';
import Oversettelse from '../Oversettelse/Oversettelse';
import { useTranslation } from 'react-i18next';

interface ServerFeilAdvarselProps {
  onClose: () => void;
  isOpen?: boolean;
}

const ServerFeilAdvarsel = (props: ServerFeilAdvarselProps) => {
  const { t } = useTranslation();
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
        <Oversettelse langKey={LangKey.SERVER_FEIL_ADVARSEL_TEXT} />
        <InternLenke onClick={() => props.onClose()}>{t(LangKey.SERVER_FEIL_ADVARSEL_HIDE)}</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default ServerFeilAdvarsel;
