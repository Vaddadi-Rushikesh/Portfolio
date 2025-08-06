import ReviewCard from "./ReviewCard"


const reviews = [
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-1.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-2.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-3.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-4.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-1.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-2.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-3.jpg',
        company: 'myCompany'
    },
    {
        content: 'qwertyuiop asdfghjkl zxcvbnm',
        name: 'Rushikesh Vaddadi',
        imgSrc:'/images/people-4.jpg',
        company: 'myCompany'
    }
]


const Review = () => {
  return (
    <section 
    id="reviews"
    className="section overflow-hidden"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
                What our customers say
            </h2>

            <div className="flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgSrc, company}, key)=>(
                    <ReviewCard
                    key={key}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    content={content}
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Review
