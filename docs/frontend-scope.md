# Zinder frontend scope map

## MVP admin pages

| Page | Role | Must-have sections | Shared components | Priority |
| --- | --- | --- | --- | --- |
| Service options management | Admin | feature list, active/inactive toggle, edit label/type/required, drag-sort placeholder, delete confirm placeholder | admin table, filters panel | MVP |
| Provider management | Admin | provider list, view profile, active/inactive toggle | admin table | MVP |
| Provider-service explorer | Admin | filters by serviceId, providerId, categoryId, features, results list | filters panel, provider/service cards | MVP |

## Phase 2 placeholder pages

| Page | Role | Must-have sections | Shared components | Priority |
| --- | --- | --- | --- | --- |
| Requests / Orders | Customer, Provider | status tabs, cards/list, filters, empty/loading/error | service card | Phase 2 |
| Quote / Accept flow | Customer, Provider | quote summary, accept/reject CTA, timeline | provider card, service card | Phase 2 |
| Reviews | Customer, Provider | rating summary, review list, submit state | provider card | Phase 2 |
| Notifications | Customer, Provider | grouped notifications, unread state, empty state | list item cards | Phase 2 |
| Chat | Customer, Provider | conversation list, thread, composer, states | responsive split layout | Phase 2 |
| Payments / Wallet | Customer, Provider | balance summary, payout/history cards, transaction states | summary cards, table | Phase 2 |

## Designer requirements

- Every page should have Loading / Empty / Error states.
- Shared components to design and reuse:
  - Provider Card
  - Service Card
  - Filters Panel
  - Admin Tables
- Responsive coverage: Mobile + Desktop.
