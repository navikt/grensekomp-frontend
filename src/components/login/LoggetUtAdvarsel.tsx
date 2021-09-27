import React from 'react';
import ModalWrapper from 'nav-frontend-modal';
import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import { Innholdstittel } from 'nav-frontend-typografi';
import InternLenke from '../felles/InternLenke';
import { useTranslation } from 'react-i18next';
import LangKey from '../../language/LangKey';
import lenker from '../../config/lenker';
import { useParams } from 'react-router-dom';
import injectRedirectPath from './injectRedirectPath';
import { PathParams } from '../pathParams';
import Oversettelse from '@navikt/helse-arbeidsgiver-felles-frontend/dist/components/Oversettelse/Oversettelse';

interface LoggetUtAdvarselProps {
  onClose: Function;
}

const LoggetUtAdvarsel = ({ onClose }: LoggetUtAdvarselProps) => {
  const { t } = useTranslation();
  let { language } = useParams<PathParams>();
  const loginServiceUrlAfterRedirect = injectRedirectPath(lenker.TokenFornyet, language);
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
        <Innholdstittel>
          <Oversettelse langKey={LangKey.LOGGET_UT} />
        </Innholdstittel>
        <Oversettelse
          langKey={LangKey.LOGGETUTADVARSEL_INFO}
          variables={{ innloggingUrl: loginServiceUrlAfterRedirect }}
        />
        <InternLenke onClick={() => handleCloseModal()}>{t(LangKey.LOGGET_INN)}</InternLenke>
      </AlertStripeFeil>
    </ModalWrapper>
  );
};

export default LoggetUtAdvarsel;
