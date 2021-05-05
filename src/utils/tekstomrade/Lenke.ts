import { ReactElementDescription, RegexMatch, Rule, RuleScope } from '@navikt/textparser';

export const LenkeRule: Rule = {
  name: 'Lenke',
  scope: RuleScope.INLINE,
  regex: /(\[(.*)\])\((.*)\)/,
  parse(match: RegexMatch): any {
    return {
      name: this.name,
      content: [...match.capture]
    };
  },
  react(node: any): ReactElementDescription {
    const description = node.content[1];
    const href: string = node.content[2];
    return {
      type: 'a',
      props: { href, target: '_blank', rel: 'noopener', class: 'lenke' },
      children: description
    };
  }
};
