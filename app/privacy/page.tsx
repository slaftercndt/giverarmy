import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  LegalBody,
  LegalCallout,
  LegalList,
  LegalSection,
} from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GiveSendGo Charities, Inc. collects, uses, shares, and protects your information across givesendgo.org and giver.army.",
};

const EMAIL = "info@givesendgo.org";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="GiveSendGo Charities, Inc. — Effective Date: June 1, 2026"
      />

      <LegalBody>
        <LegalSection title="Who we are">
          <p>
            GiveSendGo Charities, Inc. (&ldquo;GSGC&rdquo;) is a New Hampshire
            nonprofit corporation and a 501(c)(3) public charity, EIN
            88-3776392. This policy covers givesendgo.org and giver.army, every
            subdomain of either, our giving forms, and our email.
          </p>
          <LegalCallout title="Entity separation">
            <p>
              GSGC is a separate legal entity from GiveSendGo.com LLC, which
              runs the GiveSendGo.com crowdfunding platform. We share a brand
              name. We do not share legal identity, governance, ownership, or
              bank accounts. This policy does not cover GiveSendGo.com — if you
              gave or signed up there, that platform&rsquo;s policy governs
              what you provided.
            </p>
          </LegalCallout>
        </LegalSection>

        <LegalSection title="What we collect">
          <LegalList
            items={[
              <>
                <strong>From you:</strong> name, email, mailing address, phone,
                gift amount and frequency, cause preferences, and anything you
                write to us — nominations, testimonies, survey answers.
              </>,
              <>
                <strong>From your payment:</strong> transaction records and the
                last four digits and expiration of your card. We never see or
                store your full card number. Stripe handles that.
              </>,
              <>
                <strong>Automatically:</strong> IP address, browser and device
                type, pages viewed. Standard web log information.
              </>,
              <>
                <strong>From partners:</strong> if you joined the Giver Army
                through a partner page or a co-branded campaign, we receive
                what you entered there.
              </>,
              <>
                <strong>From public and commercial data sources:</strong> see
                the next section.
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection title="Data enrichment">
          <p>
            We supplement what you give us with information from public records
            and third-party data providers. This is common in charitable
            fundraising and rarely explained, so here it is plainly.
          </p>
          <p>
            <strong>What we may append:</strong> corrected mailing addresses,
            emails, and phone numbers; employer and professional title;
            publicly reported giving to other charities; publicly recorded
            property ownership; and modeled estimates of giving capacity and
            affinity.
          </p>
          <p>
            <strong>Why:</strong> so receipts reach you, so we ask you for an
            amount that fits your situation instead of guessing, and so a
            two-person team can pay real attention to people who chose to be
            generous with us.
          </p>
          <p>
            <strong>What we do not do:</strong> we do not sell, rent, trade, or
            exchange your information or our donor list. We do not append
            health, biometric, precise location, or immigration data. We do
            not append anything about grant applicants or recipients. We do
            not use appended data to decide who receives a grant.
          </p>
          <p>
            <strong>Opting out:</strong> email {EMAIL} with the subject line
            &ldquo;No Enrichment&rdquo; and we will stop appending to your
            record and delete what we appended. Your giving and membership are
            unaffected.
          </p>
        </LegalSection>

        <LegalSection title="How we use it">
          <LegalList
            items={[
              "Process gifts, run recurring memberships, send receipts and year-end tax statements.",
              "Send impact stories, campaign updates, appeals, and event invitations.",
              "Decide which stories and causes to send you.",
              "Administer and report on grants.",
              "Understand how the Giver Army grows — retention, cohorts, what works.",
              "Prevent fraud, and comply with tax law, charitable registration, and lawful requests.",
            ]}
          />
        </LegalSection>

        <LegalSection title="Email and other contact">
          <p>
            Receipts, tax statements, billing notices, and membership
            confirmations are part of the service. You cannot unsubscribe from
            these while you have an active gift. Everything else — stories,
            appeals, campaigns, invitations — has an unsubscribe link in every
            message. Use it and we stop.
          </p>
          <p>
            Unsubscribing does not cancel your gift; to do that, use your
            member portal at GiveSendGo.com, the cancellation link in your
            receipt, or email us.
          </p>
          <p>
            We do not currently send text messages. If we start, we will ask
            for your consent first and update this policy before the first
            message goes out. We may occasionally call or write to donors of
            record. Tell us to stop and we will.
          </p>
        </LegalSection>

        <LegalSection title="Who we share it with">
          <p>
            Our vendors, each of which is contractually limited to working on
            our instructions:
          </p>
          <LegalList
            items={[
              <>
                <strong>Stripe</strong> — payments and recurring billing
              </>,
              <>
                <strong>Supabase</strong> — our member and gift database
                (United States)
              </>,
              <>
                <strong>Cloudflare</strong> — website hosting and security
              </>,
              <>
                <strong>MailerLite</strong> — donor email
              </>,
              <>
                <strong>Google Analytics</strong> — website analytics
              </>,
              <>
                <strong>Other contractually engaged vendors</strong> — service
                providers we retain from time to time for operations, storage,
                document handling, event management, and similar functions,
                each under a written agreement limiting their use of the
                information to work performed for us
              </>,
              <>
                Our accountants, auditors, and lawyers, under confidentiality
              </>,
            ]}
          />
          <p>
            We also share the minimum necessary with grant partners to make and
            verify a grant, and with international granting partners where a
            grant goes outside the United States. We do not share donor
            identity with recipients unless you ask us to.
          </p>
          <p>
            Where information moves between GSGC and GiveSendGo.com LLC — for
            example if you joined the Giver Army through a checkout page on
            that platform, or manage your membership in the member portal
            there — we do it only where the sign-up made that clear.
          </p>
          <p>
            We may disclose information where the law requires it, or to
            protect someone&rsquo;s safety. If GSGC ever merges or transfers
            its assets, donor records may transfer with it, subject to this
            policy.
          </p>
        </LegalSection>

        <LegalSection title="Cookies and analytics">
          <p>
            We use cookies that are necessary for the sites and giving forms to
            work. We also use Google Analytics to see which pages people read
            and how they found us. Google Analytics sets its own cookies and
            processes this information on Google&rsquo;s systems; you can opt
            out with Google&rsquo;s browser add-on at
            tools.google.com/dlpage/gaoptout, or by blocking cookies in your
            browser.
          </p>
        </LegalSection>

        <LegalSection title="Grant applicants and recipients">
          <p>
            People apply at the hardest moment of their lives. We treat that
            information accordingly: access is limited to staff who need it, it
            is never used for fundraising or enrichment, and no one has to
            share their story to receive help. Publishing a recipient&rsquo;s
            name, photo, or story requires their signed permission, and
            anonymity requests are honored everywhere.
          </p>
        </LegalSection>

        <LegalSection title="How long we keep it">
          <LegalList
            items={[
              <>
                <strong>Gift and tax records</strong> — seven years. Required
                by the IRS. These cannot be deleted on request.
              </>,
              <>
                <strong>Contact records</strong> — for as long as you are
                connected to us, unless you ask us to delete sooner.
              </>,
              <>
                <strong>Unfunded grant applications</strong> — 24 months, then
                deleted.
              </>,
              <>
                <strong>Unsubscribe records</strong> — kept permanently, so
                your opt-out stays honored.
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection title="Security">
          <p>
            Encryption in transit and at rest, limited staff access,
            multi-factor authentication on our systems. Card data is handled by
            Stripe and never stored by us. No system is perfect — if a breach
            affects your information, we will tell you and notify regulators as
            the law requires.
          </p>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>Email {EMAIL} and you can ask us to:</p>
          <LegalList
            items={[
              "tell you what we hold about you, or send you a copy;",
              "correct anything that’s wrong;",
              "delete your information, except tax records we’re required to keep for seven years;",
              "stop enriching your record; or",
              "stop contacting you.",
            ]}
          />
          <p>
            We honor these requests from anyone who asks, wherever you live.
            Most state privacy laws exempt nonprofits, so we are not sorting
            people by zip code. We will confirm who you are and respond within
            45 days. We are based in the United States and store your
            information here.
          </p>
        </LegalSection>

        <LegalSection title="Children">
          <p>
            Our sites are not for children under 13 and we do not knowingly
            collect their information. If a child appears in a story or on
            camera, we get parent or guardian permission.
          </p>
        </LegalSection>

        <LegalSection title="Donor recognition">
          <p>
            We may recognize donors by name. We never publish a name with a
            gift amount without permission. Ask for anonymity at any time and
            we will honor it. Donor names reported to the IRS on our Form 990
            are not part of the copy we make public.
          </p>
        </LegalSection>

        <LegalSection title="New Hampshire">
          <p>
            GSGC is registered with the New Hampshire Department of Justice,
            Charitable Trusts Unit. If you have a concern about how we handle
            your information or your gift, email us first — we would rather fix
            it. You may also contact the Charitable Trusts Unit, New Hampshire
            Department of Justice, 1 Granite Place South, Concord, NH 03301, or
            the charity regulator in your own state.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            We will post any update here with a new date. If a change
            materially affects how we use your information, we will email
            active members and donors of record first.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            GiveSendGo Charities, Inc. — Attn: Privacy
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
