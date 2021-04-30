import { ASTNode, ReactElementDescription, RegexMatch, Rule, RuleScope } from '@navikt/textparser';

export const OldListeRule: Rule = {
  name: 'Liste',
  scope: RuleScope.INLINE,
  regex: /(--|\t--|\s+--)([\s\S]*?)(\n|$)/,
  parse(match: RegexMatch): any {
    return {
      name: this.name,
      content: [...match.capture]
    };
  },
  react(node: any): ReactElementDescription {
    debugger;
    const textContent = node.content[1] ? node.content[1].trim() : 'Mangler tekst.';
    return {
      type: 'li',
      children: textContent
    };
  }
};

export const ListeRule: Rule = {
  name: 'Liste',
  scope: RuleScope.BLOCK,
  regex: /(--|\t--|\s+--)([\s\S]*?)(\n|$)/,
  parse(match: RegexMatch): ASTNode {
    return {
      name: this.name,
      content: [match.capture[1]]
    };
  },
  react(node: ASTNode): ReactElementDescription {
    return {
      type: 'li'
    };
  }
};
