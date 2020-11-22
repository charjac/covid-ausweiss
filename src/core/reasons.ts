export interface Reason {
  checked?: boolean;
  text: string;
  note?: string;
}

const reasons: Reason[] = [
  {
    text:
      '1. Déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle ou un établissement d’enseignement ou de formation, déplacements professionnels ne pouvant être différés, déplacements pour un concours ou un examen.',
    note:
      'Note : à utiliser par les travailleurs non-salariés, lorsqu’ils ne peuvent disposer d’un justificatif de déplacement établi par leur employeur.',
  },
  {
    text:
      "2. Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de première nécessité dans des établissements dont les activités demeurent autorisées, le retrait de commande et les livraisons à domicile",
    note:
      'Note : achats de première nécessité y compris les acquisitions à titre gratuit (distribution de denrées alimentaires...) et les déplacements liés à la perception de prestations sociales et au retrait d’espèces.',
  },
  {
    text:
      '3. Consultations, examens et soins ne pouvant être assurés à distance et l’achat de médicaments.',
  },
  {
    text:
      "4. Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants.",
  },
  {
    text:
      '5. Déplacement des personnes en situation de handicap et leur accompagnant.',
  },
  {
    checked: true,
    text:
      "6. Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie.",
  },
  {
    text:
      '7. Convocation judiciaire ou administrative et pour se rendre dans un service public.',
  },
  {
    text:
      "8. Participation à des missions d'intérêt général sur demande de l'autorité administrative.",
  },
  {
    text:
      '9. Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires.',
  },
];

export default reasons;
