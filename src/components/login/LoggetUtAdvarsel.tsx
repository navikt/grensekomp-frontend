import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import InternLenke from '../felles/InternLenke';
import { useTranslation } from 'react-i18next';
import Oversettelse from '../../locales/Oversettelse';
import Key from '../../locales/Key';

interface LoggetUtAdvarselProps {
  onClose: Function;
}

const LoggetUtAdvarsel = ({ onClose }: LoggetUtAdvarselProps) => {
  const { t } = useTranslation();

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <ModalWrapper
      isOpen={true}
      onRequestClose={() => handleCloseModal()}
      closeButton={false}
      className={'logget-ut-advarsel'}
      contentLabel=''
      shouldCloseOnOverlayClick={false}
    >
      <AlertStripeFeil className='logget-ut-advarsel__innhold'>
        <Innholdstittel>{t(Key.LOGGET_UT)}</Innholdstittel>
        <Oversettelse langKey={Key.LOGGETUTADVARSEL_INFO} />
        <InternLenke onClick={() => handleCloseModal()}>{t(Key.LOGGET_INN)}</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default LoggetUtAdvarsel;
