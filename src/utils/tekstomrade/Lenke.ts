import { ReactElementDescription, RegexMatch, Rule, RuleScope } from '@navikt/textparser';

export const LenkeRule: Rule = {
  name: 'Lenke',
  scope: RuleScope.INLINE,
  regex: /\[([\w\s\d.]+)\]\(((?:\/|https?:\/\/)[\w\d-./?=#]+)\)/,
  parse(match: RegexMatch): any {
    return {
      name: this.name,
      content: [...match.capture]
    };
  },
  react(node: any): ReactElementDescription {
    const description = node.content[0];
    const href = node.content[1];

    return {
      type: 'a',
      props: { href, target: '_blank', rel: 'noopener' },
      children: description
    };
  }
};
