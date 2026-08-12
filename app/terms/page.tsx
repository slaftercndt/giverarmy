import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  LegalBody,
  LegalCallout,
  LegalList,
  LegalSection,
} from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern giving, Giver Army membership, SHINE Funds, and use of givesendgo.org and giver.army, operated by GiveSendGo Charities, Inc.",
};

const EMAIL = "info@givesendgo.org";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        intro="GiveSendGo Charities, Inc. — Effective Date: June 1, 2026"
      />

      <LegalBody>
        <LegalSection title="1. Agreement">
          <p>
            GiveSendGo Charities, Inc. (&ldquo;GSGC,&rdquo; &ldquo;we&rdquo;)
            operates the websites at givesendgo.org and giver.army, together
            with the giving programs described here (the
            &ldquo;Services&rdquo;). These Terms apply to both domains and to
            every subdomain of either. By giving, joining the Giver Army,
            submitting a nomination, or subscribing to our emails, you agree to
            these Terms and to our Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection title="2. Who we are — and who we are not">
          <p>
            GSGC is a New Hampshire nonprofit corporation and a tax-exempt
            public charity under Section 501(c)(3), EIN 88-3776392. Our
            mission is to share the hope of Jesus through generosity.
          </p>
          <LegalCallout title="Entity separation">
            <p>
              GiveSendGo Charities, Inc. is a separate and independent legal
              entity from GiveSendGo.com LLC, which operates the GiveSendGo.com
              crowdfunding platform. The two share a brand name and sometimes
              collaborate. They do not share legal identity, governance,
              ownership, liability, or bank accounts. Gifts made through
              givesendgo.org or giver.army go to GiveSendGo Charities, Inc.
              Campaigns on GiveSendGo.com are governed by that platform&rsquo;s
              terms, are generally not tax-deductible, and are not GSGC&rsquo;s
              responsibility.
            </p>
          </LegalCallout>
          <p>
            On any co-branded page, we identify which entity is receiving the
            gift. If you are ever unsure, ask us before you give.
          </p>
        </LegalSection>

        <LegalSection title="3. Eligibility">
          <p>
            You must be 18 or older to give, hold a membership, or open a fund.
            You confirm the funds are yours to give and the payment method is
            yours to use.
          </p>
        </LegalSection>

        <LegalSection title="4. Gifts">
          <p>
            A gift is irrevocable. Once made, it belongs to GSGC. You receive
            nothing in exchange unless we tell you otherwise in writing at the
            time.
          </p>
          <p>
            <strong>Tax deductibility.</strong> Contributions are generally
            deductible to the extent the law allows. We send an acknowledgment
            for every gift and a year-end statement to donors of record. We
            are not tax advisors — talk to yours.
          </p>
          <p>
            <strong>Cause preferences are advisory.</strong> You can tell us
            which causes you care about, and we take it seriously. But all
            contributions, including Giver Army contributions, are received as
            unrestricted funds. GSGC keeps full and exclusive control and
            discretion over how they are used, as federal tax law requires of
            a public charity. A cause preference is not a legal restriction.
          </p>
          <p>
            <strong>No earmarking.</strong> We cannot accept a gift conditioned
            on the money going to a specific person you name. Gifts like that
            are not deductible and are not something we can do. You are
            welcome to nominate someone; the grant decision stays ours.
          </p>
          <p>
            <strong>SHINE Fund minimums.</strong> Donor-advised funds carry
            minimums so that each fund can be administered responsibly:
          </p>
          <LegalList
            items={[
              "Minimum to open a fund: $10,000",
              "Minimum additional contribution: $1,000",
              "Minimum grant recommendation: $1,000 per grant",
              "Minimum balance to keep a fund open: $5,000. If a fund falls below this and is not replenished within 60 days, GSGC may close it and move the remaining balance to the GSGC general fund.",
              "Inactivity. If no grant is recommended for 24 months, GSGC may grant the balance out at its discretion, consistent with the fund’s stated charitable purpose.",
            ]}
          />
          <p>
            Minimums are set by the Board and may change on notice. A change
            will not apply retroactively to a fund already open.
          </p>
          <p>
            <strong>Errors.</strong> We generally do not refund gifts. We will
            reverse a duplicate charge, a wrong amount, an unauthorized
            charge, or our own technical error if you tell us within 60 days.
            If we already sent a tax acknowledgment, we will correct it.
          </p>
        </LegalSection>

        <LegalSection title="5. The Giver Army">
          <p>
            When you start a recurring gift, you authorize us to charge your
            payment method in the amount and at the interval you chose, until
            you cancel. Stripe processes these charges. If a charge fails we
            will retry it and email you. If your card is reissued, Stripe may
            pass us the updated details so your membership continues. Repeated
            failure ends the membership.
          </p>
          <p>
            You can change your amount, change your causes, pause, or cancel
            at any time. Three ways to do it:
          </p>
          <LegalList
            items={[
              "in your member portal at GiveSendGo.com;",
              "through the link in any Giver Army email; or",
              <>by emailing {EMAIL}.</>,
            ]}
          />
          <p>
            Cancelling stops future charges. It does not refund past ones.
            Give us a few business days before your next scheduled charge.
          </p>
          <p>
            Membership may include recognition items or event access. If a
            benefit has real value, we will tell you its estimated value in
            your acknowledgment and your deductible amount drops accordingly.
            You can always decline a benefit.
          </p>
        </LegalSection>

        <LegalSection title="6. Care & Relief and the “100%” claim">
          <LegalCallout title="Scope">
            <p>
              Where we say 100% of a gift goes to those in need, that applies
              to designated disaster-relief contributions to a specific Care
              &amp; Relief appeal, and it means GSGC takes no administrative
              fee from those funds. It does not apply to Giver Army gifts,
              general operating gifts, SHINE Funds, or any other program.
              Payment processing fees may still apply. Any 100% claim on the
              site must be accurate for the specific fund it sits on.
            </p>
          </LegalCallout>
          <p>
            We decide which needs to fund, how much, and when. Published
            response times describe our goal, not a promise.
          </p>
        </LegalSection>

        <LegalSection title="7. SHINE Funds">
          <p>
            Contributions to a SHINE Fund are irrevocable gifts to GSGC. As
            the sponsoring charity we hold exclusive legal control and final
            authority over every distribution. Advisors may recommend grants;
            recommendations are advisory and we may decline any of them,
            including any that would benefit the advisor or a related party.
            SHINE Fund grants go only to qualified 501(c)(3) organizations —
            never to individuals. Fund minimums are in Section 4. Each fund
            has its own written agreement, which controls if it conflicts with
            these Terms.
          </p>
        </LegalSection>

        <LegalSection title="8. Nominations and recipients">
          <p>
            If you nominate someone, you confirm the information is accurate
            and that you have their permission to share it with us. Recipients
            go through separate verification and sign a grant agreement. No
            one is required to share their story to receive help, and using
            anyone&rsquo;s name, photo, or likeness requires their signed
            release.
          </p>
        </LegalSection>

        <LegalSection title="9. Communications">
          <p>
            We will email you about your gift and membership — receipts,
            billing notices, tax statements. Those come with the gift. We will
            also email you stories, appeals, and invitations; every one of
            those has an unsubscribe link. We do not currently send text
            messages.
          </p>
        </LegalSection>

        <LegalSection title="10. Your content">
          <p>
            If you send us a story, photo, video, or testimony, you give us
            permission to use it in our charitable communications. You confirm
            it is yours to give and that anyone identifiable in it has agreed.
            You can withdraw permission for future use, though we cannot
            recall what is already printed or distributed. We may edit or
            decline anything.
          </p>
        </LegalSection>

        <LegalSection title="11. What you agree not to do">
          <LegalList
            items={[
              "Use the Services for anything unlawful, or to launder money or evade sanctions.",
              "Use a payment method that is not yours.",
              "Give false information in a nomination or application.",
              "Scrape, probe, or interfere with the sites or their security.",
              "Use our name or marks to imply a partnership that does not exist.",
            ]}
          />
          <p>
            We can decline a gift, refund and refuse a contribution, or cut
            off access to the Services if these Terms are broken or if
            accepting would conflict with our mission or the law.
          </p>
        </LegalSection>

        <LegalSection title="12. Our marks">
          <p>
            The sites and their contents belong to GSGC or our licensors. Our
            marks include GiveSendGo Charities, Giver Army, A Crowd for the
            Crowdless, and SHINE Funds. Don&rsquo;t use them without written
            permission. You are welcome to share and quote our public impact
            content with attribution. Nothing here gives you any rights in
            GiveSendGo.com LLC&rsquo;s marks.
          </p>
        </LegalSection>

        <LegalSection title="13. Third parties">
          <p>
            We rely on outside providers for payments, hosting, storage, and
            email, and we link to partner sites. We don&rsquo;t control them
            and aren&rsquo;t responsible for them.
          </p>
        </LegalSection>

        <LegalSection title="14. Disclaimers and liability">
          <p className="font-semibold uppercase">
            The Services are provided &ldquo;as is,&rdquo; without warranties
            of any kind. We do not warrant the Services will be uninterrupted
            or error-free.
          </p>
          <p>We do not give legal, tax, financial, or medical advice.</p>
          <p className="font-semibold uppercase">
            To the maximum extent permitted by law, GSGC and its directors,
            officers, employees, and volunteers are not liable for indirect,
            incidental, special, consequential, or punitive damages. Our total
            liability will not exceed the greater of what you contributed in
            the prior twelve months or one hundred dollars ($100).
          </p>
          <p>
            You agree to indemnify GSGC against claims arising from your use
            of the Services, your content, or your breach of these Terms.
          </p>
        </LegalSection>

        <LegalSection title="15. Governing law and resolving disputes">
          <p>
            These Terms are governed by the laws of the State of New
            Hampshire, without regard to its conflict of laws rules.
          </p>
          <p>
            <strong>Talk to us first.</strong> We are a two-person charity,
            and almost everything that goes wrong is a billing error, a
            receipt that never arrived, or a misunderstanding about how a gift
            was used. Before filing anything, email {EMAIL} with a description
            of the problem and what would resolve it. We commit to responding
            within thirty (30) days. Most disputes end here, and we would
            rather fix a problem than litigate one.
          </p>
          <p>
            <strong>If that doesn&rsquo;t resolve it.</strong> Any dispute
            that remains will be brought exclusively in the state or federal
            courts located in Rockingham County, New Hampshire, and you and
            GSGC each consent to jurisdiction and venue there.
          </p>
          <p>
            Nothing here limits your right to contact a regulator. You may
            always bring a concern to the New Hampshire Attorney
            General&rsquo;s Charitable Trusts Unit, the IRS, or the charity
            regulator in your own state, and you may pursue a claim in small
            claims court instead of the courts named above.
          </p>
          <p>
            Any claim must be brought within one (1) year after it arises, to
            the extent the law allows.
          </p>
        </LegalSection>

        <LegalSection title="16. Changes">
          <p>
            We may update these Terms and will post the new version with a new
            date. For material changes we will email active members and donors
            of record first. We will not change the billing terms of an
            existing recurring gift without your consent.
          </p>
        </LegalSection>

        <LegalSection title="17. General">
          <p>
            If a provision is unenforceable, the rest stands. Not enforcing
            something once doesn&rsquo;t waive it. You can&rsquo;t assign
            these Terms; we can, to a successor consistent with our charitable
            purpose. These Terms and the Privacy Policy are the whole
            agreement, except where a signed fund or grant agreement controls.
          </p>
        </LegalSection>

        <LegalSection title="18. New Hampshire charitable solicitation disclosure">
          <p>
            GiveSendGo Charities, Inc. is registered with the New Hampshire
            Department of Justice, Charitable Trusts Unit, as required by RSA
            7:19 et seq. New Hampshire EIN 88-3776392.
          </p>
          <p>
            Financial information about this organization, including our IRS
            Form 990, is available from the Charitable Trusts Unit, New
            Hampshire Department of Justice, 1 Granite Place South, Concord,
            NH 03301, and on our website. Registration does not imply
            endorsement or approval by the State of New Hampshire.
          </p>
        </LegalSection>

        <LegalSection title="19. Contact">
          <p>
            GiveSendGo Charities, Inc.
            <br />
            #1067, 167 South Broadway STE 5
            <br />
            Salem, NH 03079
            <br />
            {EMAIL}
          </p>
          <p>
            EIN 88-3776392&ensp;|&ensp;givesendgo.org&ensp;|&ensp;giver.army
            <br />
            <em>For the Crowdless.</em>
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
