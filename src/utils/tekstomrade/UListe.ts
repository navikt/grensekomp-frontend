import { ASTNode, ReactElementDescription, RegexMatch, Rule, RuleScope } from '@navikt/textparser';

export const UListeRule: Rule = {
  name: 'UListe',
  scope: RuleScope.BLOCK,
  regex: /(-#-|\t-#-|\s+-#-)([\s\S]*?)(-#-)/,
  parse(match: RegexMatch): ASTNode {
    return {
      name: this.name,
      content: [match.capture[1]]
    };
  },
  react(node: ASTNode): ReactElementDescription {
    return {
      type: 'ul'
    };
  }
};
