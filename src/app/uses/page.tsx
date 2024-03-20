import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Technologies">
          <Tool title="React">
            As a developer, React is like having a Swiss Army knife in my
            toolkit. Its versatility and flexibility empower me to tackle a wide
            range of development challenges with ease. With its component-based
            architecture, building user interfaces becomes intuitive and
            efficient, allowing me to create modular and reusable code that
            scales seamlessly.
          </Tool>
          <Tool title="Node.js">
            Node.js is like having a supercharged engine for web development.
            Its event-driven, non-blocking I/O model allows me to build fast,
            scalable applications that can handle thousands of simultaneous
            connections with ease. With its vast ecosystem of libraries and
            modules, I have access to a wealth of tools and resources to
            streamline development and solve complex problems.
          </Tool>
          <Tool title="PHP/Laravel">
            As a developer, Laravel is like having a supercharged engine for
            building web applications. Its elegant syntax, intuitive features,
            and robust ecosystem make it one of my framework of choice for
            backend development. With Laravel, I can quickly scaffold out
            complex features like authentication, authorization, and database
            interactions, saving me time and effort in the development process.
          </Tool>
          <Tool title="Next.js">
            Next.js is like having a turbocharged engine for web development.
            Its opinionated yet flexible framework streamlines the development
            process, allowing me to build modern, high-performance web
            applications with ease. With built-in support for server-side
            rendering, static site generation, and automatic code splitting,
            Next.js ensures optimal performance and SEO-friendliness out of the
            box.
          </Tool>
          <Tool title="Wordpress">
            WordPress stands as a versatile powerhouse in the realm of web
            development. Its vast collection of themes, plugins, and
            customization options offer developers an expansive playground to
            create tailored websites that perfectly match their clients’ needs.
            With its user-friendly interface and robust content management
            system (CMS), WordPress simplifies content creation and management,
            allowing developers to focus on crafting engaging and functional
            websites without unnecessary hassle.
          </Tool>
          <Tool title="Shopify">
            From a developer’s perspective, Shopify is like having a trusted
            partner in e-commerce development. Its intuitive platform and
            extensive array of tools empower me to create dynamic and fully
            customized online stores for my clients with ease. The user-friendly
            interface and built-in features streamline the development process,
            allowing me to focus on designing engaging storefronts and
            optimizing the shopping experience.
          </Tool>
          <Tool title="Webflow">
            As a developer, Webflow offers a comprehensive suite of design and
            development tools that streamline the website creation process. Its
            intuitive visual editor and robust feature set enable me to
            prototype designs, customize layouts, and add interactive elements
            effortlessly. Webflow generates clean, semantic code behind the
            scenes, ensuring that the websites I build adhere to industry
            standards and best practices.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            As a developer, Figma is an indispensable tool in my workflow. Its
            user-friendly interface and collaborative features empower me to
            work closely with designers, ensuring that the final product aligns
            perfectly with the intended vision. With Figma, I can effortlessly
            translate design concepts into code, thanks to its
            developer-friendly features like component libraries and code
            snippets.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Visual Studio Code (VSCode) isn’t just an editor – it’s a
            developer’s best friend. With its intuitive interface and extensive
            feature set, it streamlines the coding process, allowing me to
            write, debug, and collaborate on code with ease.
          </Tool>
          <Tool title="iTerm2">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
          <Tool title="Github">
            GitHub isn’t just a version control platform – it’s a developer’s
            central hub for collaboration, innovation, and code management. With
            GitHub, I have the tools and resources I need to accelerate my
            development process and make an impact in the world of software
            engineering.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Pro, 16GB RAM (2021)">
            I was using an Intel-based 16” Lenovo prior to this and the
            difference is night and day. I’ve never heard the fans turn on a
            single time, even under the incredibly heavy loads I put it through
            with our various launch simulations.
          </Tool>
          <Tool title="LG 32” 4K UHD (3840 x 2160)">
            As a developer, the LG 32” 4K monitor is a game-changer. Its crisp
            4K resolution brings my code to life, allowing me to see every
            detail with unparalleled clarity. With its generous 32-inch screen,
            I can easily manage multiple projects side by side, boosting my
            productivity and workflow efficiency.
          </Tool>
          <Tool title="Apple AirPods Pro">
            As a developer, the Apple AirPods Pro are more than just headphones
            – they’re an essential tool for enhancing productivity and focus.
            With active noise cancellation, they create an immersive environment
            ideal for deep coding sessions, blocking out distractions and
            allowing you to fully immerse yourself in your work.
          </Tool>
          <Tool title="Apple Magic Trackpad">
            There’s something about mastering all the gestures that makes me
            feel like a maestro conducting a symphony. I find immense joy in
            this sense of mastery and control.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            The Apple Magic Keyboard, a must-have for MacBook Pro developers,
            offers unparalleled flexibility. Its innovative design allows you to
            position your MacBook sideways, optimizing your workspace for
            maximum comfort and efficiency.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
