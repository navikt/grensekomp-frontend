import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import injectRedirectPath from './injectRedirectPath';
import InternLenke from '../felles/InternLenke';
import lenker from '../../config/lenker';
import { useTranslation } from 'react-i18next';
import Key from '../../locales/Key';

interface LoggetUtAdvarselProps {
  onClose: Function;
}

const LoggetUtAdvarsel = ({ onClose }: LoggetUtAdvarselProps) => {
  const loginServiceUrlAfterRedirect = injectRedirectPath(lenker.TokenFornyet);
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
        <ul>
          <li>{t(Key.IKKE_LUKK)}</li>
          <li>
            <a href={loginServiceUrlAfterRedirect} rel='noopener noreferrer' target='_blank'>
              {t(Key.ID_PORTEN_ÅBNE)}
            </a>
          </li>
          <li>{t(Key.ID_PORTEN_LOGG_INN)}</li>
          <li>{t(Key.RETURNER)}</li>
          <li>{t(Key.LUKK_OG_SEND)}</li>
        </ul>
        <InternLenke onClick={() => handleCloseModal()}>{t(Key.LOGGET_INN)}</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default LoggetUtAdvarsel;
