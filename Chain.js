//Chain.js
function Chain( dictionary )
{
    this.dictionary = dictionary;
}

Chain.prototype.make = function(first_word, last_word)
{
    if( this.is_valid_chain( first_word, last_word ) )
    {
        return this.find_word_chain( first_word, last_word );
    }
};

Chain.prototype.find_word_chain = function( first_word, last_word )
{
    let chain = []
    chain.push( first_word );

    let comparison_word = first_word

    for (let i = 0; i < first_word.length; i++)
    {
        if( !this.strings_match( comparison_word.charAt(i), last_word.charAt(i) ) )
        {
            let last_swap_letter = last_word.charAt(i);
            let swap_word = this.swap_character_at( comparison_word, last_swap_letter, i );

            if( !this.strings_match(swap_word, last_word) )
            {
                if( this.in_dictonary( swap_word ) )
                {   
                    chain.push( swap_word );
                    comparison_word = swap_word;
                    i = 0; //back to the start
                }
            }
        }
    }

    chain.push( last_word );

    return chain;
}

Chain.prototype.in_dictonary = function( word )
{
    return (this.dictionary.indexOf( word ) != -1);
}

Chain.prototype.is_valid_chain = function(first_word, last_word)
{
    if( !this.strings_match( first_word, last_word ) )
    {
        if( this.string_length_match( first_word, last_word ) )
        {
            return true;
        }
        else throw new Error("Words must be same length");
    }
    else throw new Error("Words must be different");

};

Chain.prototype.strings_match = function( string_1, string_2 )
{
    return ( string_1 === string_2 );
};

Chain.prototype.string_length_match = function( string_1, string_2 )
{
    return ( string_1.length === string_2.length );
};

Chain.prototype.swap_character_at = function( str, chr, index )
{
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
};

module.exports = Chain;